import mainReducer, {addPost, deletePost} from "./main_reducer";
let state = {
    postData:
        [
            { id: 1, header: 'some text...', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vitae delectus culpa est in eius quis illum ipsum quibusdam, possimus doloremque officia at ut, aspernatur voluptatum laborum blanditiis repellat rerum.', data: '22.22.22' },
            { id: 2, header: 'some text...', content: 'Your text.', data: '22/02/2020' },
            { id: 3, header: 'some text...', content: 'and it too', data: '22/02/2020' },
        ]}
it('new post should been incremented', () => {
    //1. start test data
    let action = addPost('hello world', "22.22.22")
    //2. action
    let newState = mainReducer(state, action);
    //3. expectation
    expect(newState.postData.length).toBe(4)
})

it('message of new post should been correct ', () => {
    let action = addPost('hello world', "22.22.22")
    let newState = mainReducer(state, action);
    expect(newState.postData[0].content).toBe('hello world')
})

it('the post should been deleted ', () => {
    let action = deletePost(1)
    let newState = mainReducer(state, action);
    expect(newState.postData.length).toBe(2)
})

it(`the post shouldn't been deleted if incorrect id`, () => {
    let action = deletePost(1000)
    expect(newState.postData.length).toBe(3)
})