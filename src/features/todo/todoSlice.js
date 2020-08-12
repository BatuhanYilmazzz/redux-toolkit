import { createSlice } from '@reduxjs/toolkit';
let todoId = 1;
export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      state.push({
        id: todoId,
        desc: payload,
      });
      todoId++;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state = state.filter((todo) => todo.id !== id);
    },
    updateTodo: () => {
      //Add todo
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
