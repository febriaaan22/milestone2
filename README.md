This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Seren
### Register
[POST] /api/auth/registration

Headers
```
{
    "email": "example@mail.com",
    "username": "testinguser",
    "password": "password12345"
}
```
Respond success
```
{
    "success": true,
    "status": 200,
    "message": "registration successful",
    "data": {
        "user_id": 1,
        "user_name": "testinguser",
        "user_email": "example@mail.com",
        "user_pass": "niuwqnfiqwn1422410124asdqeqw",
        "user_role": "user",
        "updatedAt": "2024-04-03T22:52:23.497Z",
        "createdAt": "2024-04-03T22:52:23.497Z"
    }
}
```
if email already taken. that respond
```
{
    "success": false,
    "status": 409,
    "message": "The provided email is already registered. Please use a different email address."
}
```
### Login
[POST] /api/auth/login

Headers
```
{
 "email": "example@mail.com",
 "password": "password"
 }
```
Respond success
```
{
    "success": true,
    "status": 200,
    "message": "login successful",
    "data": {
        "user_id": 1,
        "user_name": "example",
        "user_email": "example@mail.com",
        "user_pass": "niuwqnfiqwn1422410124asdqeqw",
        "user_role": "user",
        "createdAt": "2024-03-28T07:27:37.358Z",
        "updatedAt": "2024-03-28T07:27:37.358Z"
    }
}
```
if password is false. that respond
```
{
    "success": true,
    "status": 401,
    "message": "Password is incorrect"
}
```
### Post Comment Thread
[POST] /api/commentThread/:threadId/:userId

Headers
```
{
    "comment": "tescomment12345"
}
```
Respond Success
```
{
    "success": true,
    "message": "Success Comment Thread",
    "data": {
        "status": 200,
        "message": "Success Comment Thread",
        "data": {
            "titleThread": "testThread",
            "comment": {
                "comment_id": 4,
                "comment_post": "tescomment12345",
                "threads_id": 5,
                "user_id": 2,
                "comment_date": "2024-04-03T23:20:17.000Z",
                "updatedAt": "2024-04-03T23:20:17.398Z",
                "createdAt": "2024-04-03T23:20:17.398Z"
            },
            "commentator": "usertes1"
        }
    }
}
```
### Get Comment Thread
[GET] /api/getComment/:threadId

Respond Success
```
{
    "success": true,
    "message": "Success get all Comments",
    "data": {
        "status": 200,
        "message": "Success get all comment",
        "data": [
            {
                "comment_id": 2,
                "comment_post": "hello world",
                "threads_id": 5,
                "user_id": 2,
                "comment_date": "2024-03-28T10:42:08.000Z",
                "createdAt": "2024-03-28T10:42:07.862Z",
                "updatedAt": "2024-03-28T15:06:54.132Z",
                "thread": {
                    "thread_title": "testThread"
                },
                "user": {
                    "user_name": "usertes1"
                }
            },
            {
                "comment_id": 4,
                "comment_post": "tescomment12345",
                "threads_id": 5,
                "user_id": 2,
                "comment_date": "2024-04-03T23:20:17.000Z",
                "createdAt": "2024-04-03T23:20:17.398Z",
                "updatedAt": "2024-04-03T23:20:17.398Z",
                "thread": {
                    "thread_title": "testThread"
                },
                "user": {
                    "user_name": "usertes1"
                }
            }
        ]
    }
}
```
### PUT Comment Thread
[PUT] /api/putComment/:commented

Header
```
{"comment": "tes comment"}
```

Respond Success
```
{
    "success": true,
    "message": "Success edited Comment Thread",
    "data": {
        "status": 200,
        "message": "Success Edited Comment",
        "data": {
            "count": [
                1
            ],
            "comment": {
                "comment_id": 4,
                "comment_post": "tes comment",
                "threads_id": 5,
                "user_id": 2,
                "comment_date": "2024-04-03T23:20:17.000Z",
                "createdAt": "2024-04-03T23:20:17.398Z",
                "updatedAt": "2024-04-03T23:28:09.836Z",
                "thread": {
                    "thread_title": "testThread"
                },
                "user": {
                    "user_name": "usertes1"
                }
            }
        }
    }
}
```
### Delete Comment Thread
[DELETE] /api/deleteComment/:commentId

Respond success
```
{
    "success": true,
    "message": "Success deleted Comment Thread",
    "data": {
        "status": 200,
        "message": "Success Deleted Comment",
        "data": 1
    }
}
```
