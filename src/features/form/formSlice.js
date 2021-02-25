import { createSlice, nanoid, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { client } from '../../api/client'



const isProd = false

const API_FETCH_FORM_DEV  = "http://localhost:8000/form-data"
const API_FETCH_FORM_PROD = "https://tscapi.herokuapp.com/form-data"


const API_SUBMIT_FORM_DEV  = "http://localhost:8000/submit-form"
const API_SUBMIT_FORM_PROD = "https://tscapi.herokuapp.com/submit-form"


// logically set api urls based on the mode we are in
const API_FETCH_FORM  = isProd ? API_FETCH_FORM_PROD  : API_FETCH_FORM_DEV 
const API_SUBMIT_FORM = isProd ? API_SUBMIT_FORM_PROD : API_SUBMIT_FORM_DEV


const initialReactions = {
    thumbsUp: 0,
    hooray: 0,
    heart: 0,
    rocket: 0, 
    eyes: 0
}
// const initialState = [
//     { id: '1', title: 'First form', content: 'Hello', dateIso: "2020-07-22T16:47:54.992Z", reactions: initialReactions },
//     { id: '2', title: 'Second Form', content: 'More content', dateIso: "3030-07-22T16:47:54.992Z", reactions: initialReactions }
// ]

const initialState = {
    questions: [],
    status: 'idle',
    error: null
}

export const fetchForm = createAsyncThunk('form/fetchForm', async () => {
    const response = await client.get(API_FETCH_FORM)
    // console.log(response)
    return response
})


// Send form to api
export const submitForm = createAsyncThunk(
    'form/submitForm',
    async form => {
        console.log(form)
        const response = await client.form(API_SUBMIT_FORM, { form })
        console.log(response)
        return response
    }
)



const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formAdded: {
            reducer(state, action) {
                state.form.push(action.payload)
            },
            prepare(title, content, userId) {
                console.log('preparing')
                // return {
                //     payload: {
                //         id: nanoid(),
                //         dateIso: new Date().toISOString(),
                //         title,
                //         content, 
                //         user: userId
                //     }
                // }
            }
        },
        formUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingForm = state.form.find(form => form.id === id)
            if(existingForm) {
                existingForm.title = title
                existingForm.content = content
            }
        },
        reactionAdded(state, action) {
            // const { formId, reaction } = action.payload
            // const existingForm = state.form.find(form => form.id === formId)
            // if(existingForm) {
            //     existingForm.reactions[reaction]++
            // }
        }
    },
    extraReducers: {
        [fetchForm.pending]: (state, action) => {
            state.status = 'loading'
            console.log('fetch form pending')
        },
        [fetchForm.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const questions = action.payload.q
            const options = action.payload.o

            questions.forEach(question => {
               question.options = options.filter(option => option.question === question.id)
            })

            state.questions = questions
            console.log(questions)
            console.log('fetch form fulfilled')
        },
        [fetchForm.rejected]: (state, action) => {
            state.status = 'failed'

            console.log('fetch rejected')
            console.group(action)
            state.error = action.payload
        },
        [submitForm.fulfilled]: (state, action) => {
            console.log('submit form fullifilled')
            // state.form.push(action.payload)
        }
    }
})

export const { formAdded, formUpdated, reactionAdded } =  formSlice.actions

export default formSlice.reducer

export const selectAllQuestions = state => state.form.questions

export const selectQuestionById = (state, questionId) => state.form.questions.find(question => question.id === questionId)

// export const selectFormsByUser = createSelector(
//     [selectAllForms, (state, userId) => userId],
//     (form, id) => form.filter(form => form.user === id)
// )