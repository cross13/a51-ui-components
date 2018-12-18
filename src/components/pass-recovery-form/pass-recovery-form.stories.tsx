import * as React from "react";
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import {Form , Card} from 'antd';
import PassRecoveryForm from './pass-recovery-form';

import './pass-recovery-form.scss';

const WrappedNormalPassRecoveryForm = Form.create()(PassRecoveryForm);

storiesOf('PassRecovery Form', module)
  .add('Default', withInfo({ inline: true })(() => (
    <Card className="PassRecoveryWrapper">
      <WrappedNormalPassRecoveryForm
        oldPasswordPlaceholder={'Enter old password'}
        newPasswordPlaceholder={'Enter a new password'}
        repeatPasswordPlaceholder={'Repeat the password'}
        oldPassword={'123456'}
        errors={
          {
              oldPassword: 'Please type your old password!',
              newPassword: 'Missmatch new password!'
          }
        }
        onSubmit={action('submit with')}/>
    </Card>
)));
