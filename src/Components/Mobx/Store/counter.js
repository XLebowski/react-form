// import { Component } from 'react'
import { makeAutoObservable } from 'mobx';

function Counter() {
    return makeAutoObservable({
        count: 0,

        increment() {
            this.count = this.count + 1;
        },

        decrement() {
            this.count = this.count - 1;
        },
    });
}

export default new Counter();
