import * as React from "react";
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import {Form , Card} from 'antd';
import LoginForm from './login-form';

import './login-form.scss';

const WrappedNormalLoginForm = Form.create()(LoginForm);

storiesOf('Login Form', module)
  .add('Default', withInfo({ inline: true })(() => (
    <Card className="LoginWrapper">
      <WrappedNormalLoginForm
        usernamePlaceholder={'Useranme or Email'}
        passwordPlaceholder={'Password'}
        username={'demo@demo.com'}
        password={'123456'}
        onSubmit={action('submit with')}/>
    </Card>
)));
