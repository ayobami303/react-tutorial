const initialState = {
    posts: [
        { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { id: 2, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla' }
    ]
}

const rootReducer = (state= initialState, action) => {
    if(action.type === 'DELETE_POST'){
        const id = action.id;
        const posts = state.posts.filter((post) => {
            return post.id !== id;
        });

        return{ ...state, posts: posts };
    }
    return { ...state };
}

export default rootReducer;