<?php
require './lib/phpmailer/class.phpmailer.php';

error_reporting(0);
session_start();

$data = $_POST;
if(!isset($data['type']) && strtolower($_SESSION['captcha']) !== strtolower($data['captcha']))
{
    echo json_encode(false);exit;
}

$mail = new PHPMailer;

$mail->IsSMTP();
$mail->Host = 'smtp.ym.163.com';
$mail->From = 'no-reply@boogu.cn';
$mail->SetFrom('no-reply@boogu.cn', 'Customer');
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@boogu.cn';
$mail->Password = '6LtuNTgLwP';
$mail->SMTPSecure = 'tls';
$mail->AddAddress('tony@jinoinc.com', 'Tony');
$mail->IsHTML(true);
$mail->CharSet = 'UTF-8';

if($data['type'])
{
    $mail->Subject = '客户建议与投诉';
    $mail->Body = <<<Eot
    <style>p, div {font-size:12px;} div{padding-bottom:10px;width:500px}.line {border-bottom:1px dashed #000;}</style>
    <h4>您好：有一条客户建议与投诉</h4>
    <div>
        内容如下：
        <p style="text-indent:2em">{$data['suggest']}</p>
    </div>
    <div class="line"></div>
    <p>本邮件由系统自动发送，请勿回复。</p>
Eot;

}
else
{
    $mail->Subject = '客户咨询';
    $mail->Body = <<<EOT
    <style>
        table {font-size:12px;width: 500px;border-collapse:collapse;}
        td {border: 1px solid #666666;padding: 8px;background-color: #ffffff;text-align:center;border-spacing:0;}
        .field {width: 100px;font-size:14px;font-weight:700;background-color:#ccc;}
        p {font-size:12px }
        .line {border-bottom:1px dashed #000;width:500px;padding-top:20px}
    </style>
    <h4>您好：有一条客户咨询</h4>
    <table>
        <tr><td class="field">用   户:</td><td>{$data['userName']}</td></tr>
        <tr><td class="field">邮   箱:</td><td>{$data['email']}</td></tr>
        <tr><td class="field">联系地址:</td><td>{$data['address']}</td></tr>
        <tr><td class="field">公司地址:</td><td>{$data['company']}</td></tr>
        <tr><td class="field">办公电话:</td><td>{$data['phone']}</td></tr>
        <tr><td class="field">传　　真:</td><td>{$data['fax']}</td></tr>
        <tr><td class="field">咨询内容:</td><td>{$data['question']}</td></tr>
    </table>
    <div class="line"></div>
    <p>本邮件由系统自动发送，请勿回复。</p>
EOT;
}

if(!$mail->Send()) {
    echo json_encode('发送失败');
    exit;
}

echo json_encode('发送成功');

