export class User {
    constructor ({ displayName }) {
        this.displayName = displayName;
        this.avatarText = this.displayName.split(' ')
            .map((word) => word[0])
            .join('');
        this.avatarBackgroundColor = "red";
    }
}