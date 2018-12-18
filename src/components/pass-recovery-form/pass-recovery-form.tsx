import * as React from "react";
import {
    Form, Icon, Input, Button,
} from 'antd';

export interface SubmitValuesProp {
    oldPassword: string,
    newPassword: string,
    repeatPassword: string,
}

export interface PassRecoveryForm51Props {
  form: any,
  buttonTitle?: string,
  oldPassword: string,
  errors: {
      oldPassword?: string,
      newPassword?: string,
  },
  oldPasswordPlaceholder?: string,
  newPasswordPlaceholder: string,
  repeatPasswordPlaceholder: string,
  onSubmit: (n: SubmitValuesProp) => void
}

const FormItem = Form.Item;



class PassRecoveryForm51 extends React.Component<PassRecoveryForm51Props, {}> {
  handleSubmit = (event : any) => {
    event.preventDefault();
    this.props.form.validateFields((err : any, values : SubmitValuesProp) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    })
  };

  validateNewPasswords = (rule: any, value: string, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPassword')) {
        callback('Two passwords that you enter are inconsistent!');
    } else {
        callback();
    }
  };

  render() {
    const { buttonTitle, oldPassword, oldPasswordPlaceholder, newPasswordPlaceholder, repeatPasswordPlaceholder,
            errors } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="PassRecoveryForm-Container">
        <FormItem>
          {getFieldDecorator('oldPassword', {
            rules: [{ required: true, message: errors.oldPassword }],
            initialValue: oldPassword
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder={oldPasswordPlaceholder} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('newPassword', {
            rules: [{ required: true, message: errors.newPassword }],
          })(
            <Input prefix={<Icon type="lock"  />} type="password" placeholder={newPasswordPlaceholder} />
          )}
        </FormItem>
          <FormItem>
          {getFieldDecorator('repeatPassword', {
            rules: [{
                required: true,
                message: errors.newPassword,
                validator: this.validateNewPasswords,
            }],
            //initialValue: this.props.password
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder={repeatPasswordPlaceholder} />
          )}
        </FormItem>
         <FormItem>
          <Button type="primary" htmlType="submit" className="PassRecoveryForm-Button">
            {buttonTitle || 'Recovery password'}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default PassRecoveryForm51;