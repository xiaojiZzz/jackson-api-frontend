import Footer from '@/components/Footer';
import { userRegisterUsingPost } from '@/services/jacksonapi-backend/userController';
import { Link, useIntl, useParams } from '@@/exports';
import { LockOutlined, RedditOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history } from '@umijs/max';
import { Form, message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const [invitationCode, setInvitationCode] = useState<string>('');
  const [form] = Form.useForm();
  const params = useParams();
  const intl = useIntl();

  useEffect(() => {
    if (params.id) {
      setInvitationCode(params.id);
      form.setFieldsValue(invitationCode);
    }
  }, [params.id]);

  useEffect(() => {
    form.setFieldsValue({ invitationCode });
  }, [invitationCode]);

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const doRegister = (res: any) => {
    if (res.data && res.code === 0) {
      message.success('注册成功');
      setTimeout(() => {
        history.push('/user/login');
      }, 100);
    }
  };

  const handleSubmit = async (values: API.UserRegisterRequest) => {
    try {
      // 登录
      const res = await userRegisterUsingPost({
        ...values,
      });
      doRegister(res);
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'注册账号'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '57px 0',
        }}
      >
        <LoginForm
          form={form}
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/assets/logo.png" />}
          title="JacksonAPI 接口开发平台"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            invitationCode: invitationCode,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账号注册',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="userName"
                fieldProps={{
                  size: 'large',
                  prefix: <RedditOutlined />,
                }}
                placeholder={'请输入昵称，长度在 1-10 之间'}
                rules={[
                  {
                    required: true,
                    message: '昵称是必填项！',
                  },
                ]}
              />
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号，长度在 4-10 之间'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码，不少于 6 位'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请确认密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                ]}
              />
            </>
          )}
          <ProFormCheckbox
            initialValue={true}
            name="agreeToAnAgreement"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(new Error('同意协议后才可以注册'));
                  }
                  return Promise.resolve();
                },
                required: true,
              }),
            ]}
          >
            同意并接受本平台协议
          </ProFormCheckbox>
          <div
            style={{
              marginTop: -18,
            }}
          >
            <Link
              to={'/user/login'}
              style={{
                float: 'right',
              }}
            >
              已有账号?点击前往登录
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
