"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./classes/EmailNotification");
const SmsNotification_1 = require("./classes/SmsNotification");
const NotificationService_1 = require("./services/NotificationService");
const email = new EmailNotification_1.EmailNotification("prueba@gmail.com", "Hola ISW-521", "Prueba");
const Sms = new SmsNotification_1.SmsNotification("+50683570719", "Reciebiendo pin: 4563");
const queue = [email, Sms];
const service = new NotificationService_1.NotificationService();
service.processNotification(queue);
//# sourceMappingURL=index.js.map