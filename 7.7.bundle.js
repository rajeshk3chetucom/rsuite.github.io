/*! Last update: Sat Aug 13 2016 21:22:35 GMT+0800 (CST) */
webpackJsonp([7],{369:function(o,n,t){"use strict";function e(o){return o&&o.__esModule?o:{"default":o}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(3),a=e(r),d=t(254),l=t(338),m=e(l),i=t(335),c={basic:"var formLayoutInstance = (\n    <Form>\n        <FormGroup controlId='username'>\n            <ControlLabel>Username</ControlLabel>\n            <FormControl  type='text'  />\n        </FormGroup>\n        <FormGroup controlId='Password'>\n            <ControlLabel>Password</ControlLabel>\n            <FormControl  type='password'  />\n        </FormGroup>\n\n        <FormGroup controlId='checkboxList' >\n            <ControlLabel>CheckboxList</ControlLabel>\n            <CheckboxList name=\"checkboxList\" >\n                <Checkbox checked>Item A</Checkbox>\n                <Checkbox>Item B</Checkbox>\n                <Checkbox>Item C</Checkbox>\n                <Checkbox disabled>Item D</Checkbox>\n            </CheckboxList>\n        </FormGroup>\n\n        <FormGroup controlId='radioList'>\n            <ControlLabel>RadioList inline</ControlLabel>\n            <RadioList name=\"radioList\" inline>\n                <Radio checked>Item A</Radio>\n                <Radio>Item B</Radio>\n                <Radio>Item C</Radio>\n                <Radio disabled>Item D</Radio>\n            </RadioList>\n        </FormGroup>\n\n        <Button type=\"submit\" shape=\"default\">\n           Submit\n        </Button>\n    </Form>\n);\nReactDOM.render(formLayoutInstance, mountNode);\n",inline:"var formLayoutInstance = (\n    <Form inline>\n        <FormGroup controlId='username'>\n            <ControlLabel>Username</ControlLabel>\n            <FormControl  type='text'  />\n        </FormGroup>\n        <FormGroup controlId='Password'>\n            <ControlLabel>Password</ControlLabel>\n            <FormControl  type='password'  />\n        </FormGroup>\n\n        <FormGroup controlId='checkboxList'>\n            <ControlLabel>CheckboxList</ControlLabel>\n            <CheckboxList name=\"checkboxList\" inline>\n                <Checkbox checked>Item A</Checkbox>\n                <Checkbox>Item B</Checkbox>\n            </CheckboxList>\n        </FormGroup>\n\n        <Button type=\"submit\" shape=\"default\">\n           Submit\n        </Button>\n    </Form>\n);\nReactDOM.render(formLayoutInstance, mountNode);\n",horizontal:"var formLayoutInstance = (\n    <Form horizontal>\n        <FormGroup controlId='username'>\n            <Col md={2} componentClass={ControlLabel} >\n                Username\n            </Col>\n            <Col md={10}>\n                <FormControl  type='text'  />\n            </Col>\n        </FormGroup>\n        <FormGroup controlId='Password'>\n            <Col md={2} componentClass={ControlLabel} >\n                Password\n            </Col>\n            <Col md={10}>\n               <FormControl  type='password'  />\n            </Col>\n        </FormGroup>\n\n        <FormGroup controlId='radioList'>\n            <Col md={2} componentClass={ControlLabel} >\n                RadioList\n            </Col>\n            <Col md={10}>\n                 <RadioList name=\"radioList\">\n                    <Radio checked>Item A</Radio>\n                    <Radio>Item B</Radio>\n                    <Radio>Item C</Radio>\n                    <Radio disabled>Item D</Radio>\n                </RadioList>\n            </Col>\n        </FormGroup>\n\n        <FormGroup controlId='radioList'>\n            <Col md={2} componentClass={ControlLabel} >\n                RadioList\n            </Col>\n            <Col md={10}>\n                 <RadioList name=\"radioList\" inline>\n                    <Radio checked>Item A</Radio>\n                    <Radio>Item B</Radio>\n                    <Radio>Item C</Radio>\n                    <Radio disabled>Item D</Radio>\n                </RadioList>\n            </Col>\n        </FormGroup>\n\n        <FormGroup controlId='checkboxList'>\n            <Col md={2} componentClass={ControlLabel} >\n                CheckboxList\n            </Col>\n            <Col md={10}>\n                 <CheckboxList name=\"checkboxList\" inline>\n                    <Checkbox checked>Item A</Checkbox>\n                    <Checkbox>Item B</Checkbox>\n                    <Checkbox>Item C</Checkbox>\n                    <Checkbox disabled>Item D</Checkbox>\n                </CheckboxList>\n            </Col>\n        </FormGroup>\n\n        <FormGroup>\n            <Col smOffset={2} sm={10}>\n                <Button type=\"submit\" shape=\"default\">\n                    Submit\n                </Button>\n            </Col>\n        </FormGroup>\n\n    </Form>\n);\nReactDOM.render(formLayoutInstance, mountNode);\n"};n["default"]=a["default"].createClass({displayName:"formlayout",render:function(){return a["default"].createElement(d.Col,{md:9,sm:12},a["default"].createElement("h1",{className:"page-header"},"表单布局"),a["default"].createElement("h3",null,"默认布局"),a["default"].createElement(m["default"],{code:c.basic}),a["default"].createElement("h3",null,"单行布局"),a["default"].createElement(m["default"],{code:c.inline}),a["default"].createElement("h3",null,"左右横向布局"),a["default"].createElement(m["default"],{code:c.horizontal}),a["default"].createElement("h3",null,"组件属性"),a["default"].createElement(i.Markdown,null,t(370)))}})},370:function(o,n){o.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>horizontal</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>inline</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>componentClass</td> <td>elementType</td> <td></td> <td></td> </tr> </tbody> </table>"}});