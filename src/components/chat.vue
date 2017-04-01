<template>
    <div class="todo">
        <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#ffff00', '#ff00ff', '#00ffff']"
                auto-draw
                :auto-draw-duration="3000"
                auto-draw-easing="linear"
                radius=10
                :stroke-width="1"
                smooth>
        </trend>

        <router-link to="/">go back</router-link>
        <h1> todo list </h1>
        <b-button @click="showTodoItemsWhich('all')" :class="{buttonClicked: visibility == 'all'}">全部</b-button>
        <b-button @click="showTodoItemsWhich('selected')" :class="{buttonClicked: visibility == 'selected'}">选择
        </b-button>
        <b-button @click="showTodoItemsWhich('unselected')" :class="{buttonClicked: visibility == 'unselected'}">未选择
        </b-button>
        <b-button @click="showTodoItemsWhich('complete')" :class="{buttonClicked: visibility == 'complete'}">完成
        </b-button>
        <b-button @click="showTodoItemsWhich('uncomplete')" :class="{buttonClicked: visibility == 'uncomplete'}">未完成
        </b-button>
        <p><span v-text="filteredTodos.length"></span><span>条</span></p>
        <h1 v-text="title"></h1>


        <div class="col">
            <b-button-group>
                <b-button @click="deleteAllTotoItems()">删除所有</b-button>
                <b-button @click="completeAllTotoItems()">完成所有</b-button>
                <b-button @click="selectedAllTotoItems()">选择所有</b-button>
                <b-button @click="deleteAllCompleteItems()">删除所有完成</b-button>
                <b-button @click="deleteAllSelectedItems()">删除所有选择</b-button>
            </b-button-group>
        </div>

        <div>
            <b-form-input v-model="newTodoItem" type="text" placeholder="Enter your todo"
                          @keyup.enter="addNewTodoItem()">
            </b-form-input>

            <div style="height: 80px;">
                <transition name="bounce">
                    <b-button v-show="newTodoItem != ''" @click="addNewTodoItem()">增加</b-button>
                </transition>

                <b-alert state="danger" :show="addFail && newTodoItem == ''" dismissible @dismissed="addFail=false">
                    添加失败
                </b-alert>
            </div>

        </div>


        <transition-group name="slideDown" tag="ul" class="list-group">
            <li v-for="todoItem in filteredTodos" :key="todoItem">
                <b-form-checkbox v-model="todoItem.selected">
                </b-form-checkbox>
                <div v-text="todoItem.content"
                     :class="{complete: todoItem.complete}"
                     @click="toggleCurrentTodoItem(todoItem)"></div>
                <div class="delete" @click="deleteCurrentTodoItem(todoItem)">删除</div>
            </li>
        </transition-group>
    </div>
</template>

<script>

    var todoLocalKey = 'todoLocalItems'
    var todoStorage = {
        fetch: function (STORAGE_KEY) {
            var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            todos.forEach(function (todo, index) {
                todo.id = index
            })
            todoStorage.uid = todos.length
            return todos
        },
        save: function (STORAGE_KEY, todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        }
    }


    var filters = {
        all: function (todos) {
            return todos
        },
        uncomplete: function (todos) {
            return todos.filter(function (todo) {
                return !todo.complete
            })
        },
        complete: function (todos) {
            return todos.filter(function (todo) {
                return todo.complete
            })
        },
        unselected: function (todos) {
            return todos.filter(function (todo) {
                return !todo.selected
            })
        },
        selected: function (todos) {
            return todos.filter(function (todo) {
                return todo.selected
            })
        }
    }

    export default {
        name: 'todo',
        data () {
            return {
                title: 'a vue todo list for myself',
                visibility: 'all',
                newTodoItem: '',
                addFail: false,
                todoItems: todoStorage.fetch(todoLocalKey)
            }
        },
        methods: {
            addNewTodoItem: function () {
                if (this.newTodoItem == '') {
                    this.addFail = true;
                    return;
                }
                this.addFail = false;
                var newTodoItem = {
                    content: this.newTodoItem,
                    complete: false,
                    selected: false
                };

                this.newTodoItem = '';
                this.todoItems.unshift(newTodoItem);
            },
            deleteCurrentTodoItem: function (todo) {
                this.todoItems.splice(this.todoItems.indexOf(todo), 1);
            },
            toggleCurrentTodoItem: function (todo) {
                this.todoItems[this.todoItems.indexOf(todo)].complete = !this.todoItems[this.todoItems.indexOf(todo)].complete;
            },
            completeAllTotoItems: function () {
                this.todoItems.forEach(function (todo) {
                    todo.complete = true;
                })
            },
            selectedAllTotoItems: function () {
                this.todoItems.forEach(function (todo) {
                    todo.selected = true;
                })
            },
            deleteAllTotoItems: function () {
                this.todoItems = [];
            },
            deleteAllCompleteItems: function () {
                this.todoItems = filters.uncomplete(this.todoItems);
            },
            deleteAllSelectedItems: function () {
                this.todoItems = filters.unselected(this.todoItems);
            },
            showTodoItemsWhich: function (visibility) {
                this.visibility = visibility
            }
        },
        computed: {
            filteredTodos: function () {
                return filters[this.visibility](this.todoItems)
            },
        },
        watch: {
            todoItems: {
                handler: function (items) {
                    todoStorage.save(todoLocalKey, items)
                },
                deep: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    label {
        margin-bottom: 0;
    }

    input[type='text'] {
        outline: none;
        height: 36px;
        width: 80%;
        padding: 2px 10px;
        border: 1px solid #e4e4e4;
        border-radius: 4px;
        display: block;
        margin: 0 auto;
    }

    input[type='text']:focus {
        border-color: #5fb7c1;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(79, 182, 193, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px rgba(79, 182, 193, 0.6);
    }

    .complete {
        text-decoration: line-through;
        font-style: oblique;
        color: #989797;
    }

    .selector {
        height: 20px;
        width: 20px;
        background: black;
    }

    .selector.selected {
        background: green;
    }

    .buttonClicked {
        background: #42b983;
        color: #fff;
    }

    li {
        border: 1px solid #e4e4e4;
        padding: 10px;
        margin: 10px;
        -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .18);
        -moz-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .18);
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .18);
        border-radius: 4px;
    }

    li * {
        float: left;
    }

    .delete {
        float: right;
        margin-right: 20px;
    }

    .delete:hover {
        color: #5fb7c1;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .5s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(2.5);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }

    input.form-control{
        margin: 10px auto;
    }
</style>
