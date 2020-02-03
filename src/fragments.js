// Another example used in lecture 3-12 to show how to access the post that 'I' made.

export const USER_FRAGMENT = `
    fragment UserParts on User = {
        id
        username
        firstName
        lastName
        bio
        posts {
            id
            captions
        }
    }
`;
