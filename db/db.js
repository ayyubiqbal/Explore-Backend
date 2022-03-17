const Ticket = require('../models/Ticket');

class MyDB {
    constructor() {
        this.tickets = [];
    }

    /**
     * create and save a new ticket 
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket} return a ticket object
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * create multiple tickets for a single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket);
        }
    }

    /**
     * return all available ticket
     */
    find() {
        return this.tickets;
    }

    /**
     * find ticket by ticket id
     * @param {string} ticketId
     */
    findById(ticketId) {
        const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
        return ticket;
    }

    /**
     * find ticket for a given user 
     * @param {string} username
     */
    findByUsername(username) {
        const tickets = this.tickets.filter(ticket => ticket.username === username);
        return tickets;
    }

    /**
     * update ticket by id
     * @param {string} ticketId
     * @param {{username: string, price: number}} ticketId
     * @returns {Ticket}
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * delete ticket from db
     * @param {string} ticketId
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }


    /**
     * find winners
     * @param {number} winnerCount
     * @returns {Array<Ticket}
     */
    draw(winnerCount) {
        // let indexes = new Array(winnerCount);
        // for (let i = 0; i < indexes.length; this.tickets.length) {
        //     let index = Math.floor(Math.random() * this.tickets.length);
        //     while (indexes.includes(index)) {
        //         index = Math.floor(Math.random() * this.tickets.length)
        //     }
        //     indexes.push(index)
        // }

        let winnerIndexes = new Array(winnerCount);

        let index = 0;
        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length);
            // console.log('winner index', winnerIndex);
            if (!winnerIndexes.includes(winnerIndex)) {
                winnerIndexes[index++] = winnerIndex;
                continue;
            }
        }

        const winners = winnerIndexes.map((index) => this.tickets[index])
        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;