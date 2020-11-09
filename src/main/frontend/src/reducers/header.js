import {fromJS} from 'immutable'

const defaultState = fromJS({
    postList: [
        {
            postId: 1,
            coverUrl: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            user: {
                userId: 1,
                userNickName: "jack",
                userAvatarUrl: "https://p3-bcy.byteimg.com/img/banciyuan/Public/Upload/avatar/1216315/fb2f3c1cdd6d40f0ae059e761f83ecde/fat.jpg~tplv-banciyuan-abig.image",
            }
        },
        {
            postId: 2,
            coverUrl: "https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            user: {
                userId: 2,
                userNickName: "tom",
                userAvatarUrl: "https://p3-bcy.byteimg.com/img/banciyuan/Public/Upload/avatar/1216315/fb2f3c1cdd6d40f0ae059e761f83ecde/fat.jpg~tplv-banciyuan-abig.image",
            }
        },
    ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}