export interface Day {
    day: string;
    tasks: string[];
}

const Schedule: Day[] = [{
    day: 'Monday', 
    tasks: [
        'Change sheets',
        'Dust bedroom',
        'Vacuum floors',
        'Laundry: sheets'
    ]
}, {
    day: 'Tuesday', 
    tasks: [
        'Clean shower & toilet',
        'Clean counters & mirrors',
        'Change towels',
        'Laundry: towels, rags'
    ]
}, {
    day: 'Wednesday', 
    tasks: [
        'Clean out refrigerator',
        'Clean counters & appliances',
        'Organize pantry'
    ]
}, {
    day: 'Thursday', 
    tasks: [
        'Dust livingroom',
        'Freshen fabrics (pillows)',
        'Quick vacuum',
        'Pick up toys'
    ]
}, {
    day: 'Friday', 
    tasks: [
        'Vacuum carpet',
        'Sweep & mop floors',
        'Clean mirrors & windows'
    ]
}, {
    day: 'Saturday', 
    tasks: [
        'Take out trash',
        'Clean out cars'
    ]
}];

export default Schedule;