
export class Bet {
    choice?: string; 
    eventId?: string; 
    isWon?: boolean; 
    isFinished?: boolean;
    constructor(choice?: string, eventId?: string, isWon?: boolean, isFinished?: boolean) { 
        this.choice = choice; 
        this.eventId = eventId; 
        this.isWon = isWon; 
        this.isFinished = isFinished; 
    }
}