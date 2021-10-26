# Open Banking Back-end
## Welcome! :grin:
This project is a technical challenge for a selective process, so this documentation is made with the people that will be evaluating me in mind. But if you are just curious go ahead! You are also welcome here and I would love your feedback as well if you want to contact me!

You can find the back-end project [here](https://github.com/Renan0211/open-banking-back-end)

## Summary
- [Stack](#stack)
- [Strengths](#strengths)
- [Weaknesses](#weaknesses)
- [Difficulties](#difficulties)
- [How to Run (this project)](how-to-run)


## Stack
- React
	- React Router
	- React-Bootstrap
- Bootstrap
- Axios

In the front-end of this project i opted to use **React**, since i'm really used to this framework and his ability to manage and pass data throughout the pages and components will be very useful in this project. And since it's a project with a short deadline i will also be using **Bootstrap** and React-Bootstrap for helping with the styling of this project, since I'm not very creative with this sort of thing.

I also developed a back-end project specific for this project and will be using **Axios** to make the communication between front and back end.

## Strengths
Most of the components and pages of this application are easy to maintain and upgrade.
Also, this project is very reliable and has a great usability and performance, since it uses the concept of One Page Application. The usage of the React combined with React Router gave the project a great response time.
The presentation is not astonishing but it is pleasant to the eyes and the application is intuitive to use.

## Weaknesses
Since it is a full-stack project with a short deadline, i was not able to develop all the features that i wanted, so I will be listing some upgrades that are possible from my perspective.

- Tests
	- It's very evident the lack of both unit and integration tests in this project, when i first thought of this project my plans were to develop with the TDD standard, but the lack of time and some personal issues soon showed that it would not be possible, and as a result most of the application isn't tested.
- Data presentation
	- Both in Balance and Transactions page the data presentation is very bad, my plans were to use the `useEffect` hook and fetch the bank/users data and save in the state of the component once it mounted, so the presentation of the data could be more specific and easier to read, but my deadline is coming and i didn't had the time to implement it.
- Presentation
	- Although the presentation is not bad it is not great neither I wish I had more time to style it. This process is very hard to me since in opposite to the back-end and handling with data I don't have it easy. The process of making a webpage looking good is hard for me and requires a lot of attention and research for references.

## Difficulties
So, i had some issues while developing this project. The first (and foolest) one is that I am really not sure what a open banking site does :shrug:.
The second and third one are directly related: issues of personal matter and lack of time. A lot of things had been happening in my life in the past few weeks, some good and some not that good, but both requiring some of my time, attention and energy. 
Another problem that i had: the requirements of this project were very vague. While I do understand that this may be the better way to evaluate someone's code and logic, I also am not used to projects like these so a lot of times I felt kind of lost and/or wasting time with things that weren't that important.
And the last one is that this was an individual project, and everyone knows that programming in group is the best way to develop a good application. :grin:

## How to run
For the purpose of this step by step guide, I will be assuming that you are using a linux machine.
	:warning: If you don't have the back-end part of this project the front-end will not work how it is supposed to. It depends on it to store and manage data, so **to run this project you will need to have the back-end API running on port 3001** of your local machine. So if you hadn't yet, enter in [this link](https://github.com/Renan0211/open-banking-back-end) and follow the instructions to install and run the back end in your machine before trying to run the front end :warning:

 1. First of all you need to clone this repository, open the terminal, clone the repository and change for the directory created:
	 ```bash
	 git clone git@github.com:Renan0211/open-banking-front-end.git
	 cd open-banking-front-end
	 ```
2. Secondly you have to install the dependencies:
	```bash
	npm install
	```
3. Now you just have to start the project, pretty easy uh?
	 ```bash
	 npm start
	 ```
