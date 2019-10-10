const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const tasksFrontend = tasks.filter(item => {
    return item.category === 'Frontend';
});
let timeSpentForFrontend = tasksFrontend.map(item => {
    return item.timeSpent;
});
timeSpentForFrontend = timeSpentForFrontend.reduce((acc, item) => {
        return acc + item;
    });
console.log("Total time spent for frontend tasks:", timeSpentForFrontend);

const tasksBug = tasks.filter(item => {
    return item.type === 'bug';
});
let timeSpentForBugs = tasksBug.map(item => {
    return item.timeSpent;
});
timeSpentForBugs = timeSpentForBugs.reduce((acc, item) => {
    return acc + item;
});
console.log("Total time spent for fixing bugs:", timeSpentForBugs);

const PATTERN = 'UI';
let tasksByPattern = tasks.filter(item => {
    return item.title.includes(PATTERN);
});
console.log("Number of tasks having 'UI' in their names:", tasksByPattern.length);

const PATTERN1 = 'Frontend';
const PATTERN2 = 'Backend';
const tasksPattern1 = tasks.filter(item => {
    return item.category === PATTERN1;
});
const tasksPattern2 = tasks.filter(item => {
    return item.category === PATTERN2;
});
const tasksNumberPerCategory = {};
tasksNumberPerCategory[PATTERN1] = tasksPattern1.length;
tasksNumberPerCategory[PATTERN2] = tasksPattern2.length;
console.log("Number of tasks per category:", tasksNumberPerCategory);