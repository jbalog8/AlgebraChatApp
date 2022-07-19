import { User } from "./User";

export class Message {
    constructor ({ messageText, createdAt, user }) {
        this.messageText = messageText;
        this.createdAt = createdAt ? new Date(createdAt) : new Date();
        this.user = user;
    }

    displayCreatedAt() {
        return this.createdAt.toLocaleString();
    }

    static fromObject(dataObject) {
        const message = new Message({
            messageText: dataObject.messageText,
            createdAt: dataObject.createdAt,
            user: User.fromObject(dataObject.user),
        });

        return message;
    }
}