# backend-seminar
- db design to deploy basic api


# Entitiies in an seminar event system
 Every table have column
    -created_at -datetime
    -updated_at -datetime
    -deleted_at -datetime
    -deleted -enum
#
* [x] event
* [x] event_type
* [x] visitor
* [x] visitor_group
* [x] speker
* [x] host
* [x] address
      country ประเทศ  
      city จังหวัด
      district อำเภอ
      township ตำบล
      
* [x] web_url



challenge
* [x] design Database Table for seminar
     - https://lucid.app/documents/view/07f0b7e1-12c6-4db4-b71a-cb4bd4f15e1e
     ![alt text](https://i.imgur.com/RF0K8ln.jpeg)
* [x] knex connect
        npx knex init
        npx knex migrate:make inital
        after setup the migrations
            npx knex migrate:latest
* [x] 1. As a seminar host, I can create new seminar event.
* [x] 2. As a seminar host, I can upload the visitor list using csv and those list will be save to the database
* [x] 3. As a seminar host, I can link the speaker to event, so I can know who is the speaker for the event.
* [x] 4. As a seminar host, I can define the place where the seminar event  is located.
* [x] 5. As a seminar host, I can send web link to the visitor.
* [x] 6. As a visitor, I can click the link that send from seminar host to accept the invitation.
* [x] 7. As a seminar host, I can see which visitor accept the invitation.

- [x]create simple API to get the list of visitor list base on/filter by seminar event.

# DEMO https://backend-seminar.onrender.com
# get event1 and all visitorlist
https://backend-seminar.onrender.com/api/event/1/visitorList
# simple create vistor 
https://backend-seminar.onrender.com/api/visitor/addNewVisitor

{
    "name": "tryme",
    "email": "try@xxx.xxx"
}
# simple getALL vistor 
https://backend-seminar.onrender.com/api/visitor/getdata


**