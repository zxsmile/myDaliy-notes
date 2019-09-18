"use strict";
const nodemailer = require("nodemailer");

//创建发送邮箱对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱 通过node_modules/lib/well-konw/service.json找到host,port,secure
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '2273284193@qq.com', // 发送方邮箱地址
      pass: 'abkdedsnddmvecbb' // smtp 验证码
    }
  });

  // 邮件信息
  let mailobj={
    from: '"Fred Foo 👻" <2273284193@qq.com>', // 发送方邮箱地址
    to: "2273284193@qq.com", // 接收方邮箱地址
    subject: "Hello ✔", // 邮箱标题
    text: "您的邮箱验证码是：084596，有效期五分钟", // 邮箱文本内容
    //html: "<b>Hello world?</b>" // 网页内容
  }
  
  transporter.sendMail(mailobj);