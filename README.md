# Seren : Mental Health Forum and Consultation

## Overview

Seren is a platform dedicated to fostering awareness and support for mental health. Recognizing the critical importance of mental well-being, Seren offers a space for those seeking understanding, assistance, and community support. This application merges a community-driven forum with professional consultation services, creating a comprehensive environment for mental health care and discussions.

## Features

### Mental Health Forum

- **Community Engagement**: A safe, moderated space where users can share experiences, insights, and seek advice on a range of mental health topics.
- **Topic Categories**: Organized sections for various mental health issues, ensuring easy navigation and relevant discussions.
- **Anonymity Option**: Users can opt to post anonymously, encouraging open and stigma-free communication.

### Professional Consultation

- **Access to Experts**: Connect with certified mental health professionals for personalized consultations.
- **Scheduled Sessions**: Book sessions at your convenience, accommodating various time zones.
- **Confidential and Secure**: Adherence to strict standards of privacy and security, ensuring all sessions are confidential.

### Support and Resources

- **Educational Materials**: Articles, guides, and resources to inform users about mental health.

## Mission and Vision

Our mission at Seren is to demystify mental health and eliminate barriers to seeking help. We envision a world where mental health is openly discussed and addressed with the same vigor as physical health. Seren aims to cultivate a supportive community and provide easy access to professional help for those in need.

## Getting Involved

- **Join the Forum**: Participate in discussions, share your journey, or offer support.
- **Book a Consultation**: Schedule a session with our professionals for tailored guidance.
- **Volunteer**: Mental health professionals and enthusiasts are invited to contribute to our mission.

---

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
