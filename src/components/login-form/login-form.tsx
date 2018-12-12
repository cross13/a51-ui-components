import * as React from "react";
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

export interface SubmitValuesProp {
    password: string,
    remember: boolean,
    username: string
}

export interface LoginForm51Props {
    form: any,
    username: string,
    password: string,
    errors: {
      username: string,
      password: string
    },
    usernamePlaceholder: string,
    passwordPlaceholder: string,
    forgotPassword?: string,
    registerLink?: string,
    onSubmit: (n: SubmitValuesProp) => void
}


const FormItem = Form.Item;

class LoginForm51 extends React.Component<LoginForm51Props, {}> {
  handleSubmit = (event : any) => {
    event.preventDefault();
    this.props.form.validateFields((err : any, values : SubmitValuesProp) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { forgotPassword, usernamePlaceholder, passwordPlaceholder, registerLink, errors } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="LoginForm-Container">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: errors.username }],
            initialValue: this.props.username
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={usernamePlaceholder} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: errors.password }],
            initialValue: this.props.password
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder={passwordPlaceholder} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          { forgotPassword && <a className="LoginForm-Forgot" href={forgotPassword}>Forgot password</a> }
          <Button type="primary" htmlType="submit" className="LoginForm-Button">
            Log in
          </Button>
          {registerLink && <div>Or <a href={registerLink}>register now!</a></div>}
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm51;