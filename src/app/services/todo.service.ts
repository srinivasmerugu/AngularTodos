import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import PouchDB from 'pouchdb';

@Injectable()
export class TodoService {

  private todoLength: number;
  db: any;
  data: any;
  timeliaf: any;
  timelitr: any;
  timeremd: any;
  iden: any;
  idstr: any;
  todoLengthToStr: any;
  idstr1: any;
  todos: any;
  todoAfterComplete: any;
  todoBeforeComplete: any;
  toobj: any;


  constructor() {
    this.db = new PouchDB('examples');

    this.db.allDocs({
      include_docs: true
    }).then((result) => {
      this.data = [];
      let docs = result.rows.map((row) => {
        this.data.push(row.doc);
      });

      this.todos = this.data;
      this.todoBeforeComplete = this.data.filter(incomplete => incomplete.todoBeforeCompleteID === 10);
      this.todoAfterComplete = this.data.filter(complete => complete.todoAfterCompleteID === 20);
      this.todoLength = this.todos.length;
      console.log("the length of array" + this.todoLength);
    });
  }


  public getTodos(): Todo[] {

    return this.todoBeforeComplete;
  }

  public addTodo(text: string): void {
    this.todoLengthToStr = String(this.todoLength);
    let todo = {
      "_id": this.todoLengthToStr,
      "ID": this.todoLength,
      "Sender": "Dave",
      "Message": text,
      "todoBeforeCompleteID": 10,
      "Day": 1
    };

    this.todoBeforeComplete.push(todo);
    this.db.put(todo, function (err, response) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Document created Successfully");
      }
    });

    this.todoLength++;

  }

  public updateTodo(iden: number, text: String): void {
    this.todoBeforeComplete = this.todoBeforeComplete.filter((todo) => todo.ID != iden);
    this.toobj = this.todos.filter((todo) => todo.ID == iden);
    this.idstr1 = String(iden);
    this.timeliaf = this.db.get(this.idstr1).then(function (doc) {
      return doc;
    });

   this.timeliaf.then(data => {
      this.db.put({
        _id: this.idstr1,
        "ID": iden,
        "todoAfterCompleteID": 20,
        "Sender": "Dave",
        "Message": text,
        _rev: data._rev,
        "Day": 1
      });
    });
    this.todoAfterComplete.push({
        _id: this.idstr1,
        "ID": iden,
        "todoAfterCompleteID": 20,
        "Sender": "Dave",
        "Message": text,
       // _rev: data._rev,
        "Day": 1
      });

  }
  public getTodosDone(): Todo[] {
    return this.todoAfterComplete;
  }

  public removeTodo(iden: number): void {
    this.todoBeforeComplete = this.todoBeforeComplete.filter((todo) => todo.ID != iden);
    this.todoAfterComplete = this.todoAfterComplete.filter((todo) => todo.ID != iden);
    this.idstr = String(iden);
    this.timeremd = this.db.get(this.idstr).then(function (doc) {
    return doc;
    });



    this.timeremd.then(data => {
      this.db.remove({
        _id: this.idstr,
        _rev: data._rev
      });
    });
  }
}
