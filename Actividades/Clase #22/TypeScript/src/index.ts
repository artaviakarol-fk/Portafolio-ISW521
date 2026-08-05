import { INotification } from "./interfaces/INotification";
import { EmailNotification } from "./classes/EmailNotification";
import { SmsNotification } from "./classes/SmsNotification";
import { NotificationService } from "./services/NotificationService";

const email = new EmailNotification("prueba@gmail.com", "Hola ISW-521", "Prueba");

const Sms = new SmsNotification("+50683570719", "Reciebiendo pin: 4563");

const queue: INotification[] = [email, Sms];

const service = new NotificationService();

service.processNotification(queue); 