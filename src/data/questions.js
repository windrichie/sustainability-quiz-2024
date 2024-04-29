const questions = [
    {
        text: 'Which of the following carbon optimization strategies do you find interesting?',
        options: [
            { label: 'Shut down what you don\'t need', value: 'pragmatic' },
            { label: 'Choose a location that is mostly powered by renewable energy', value: 'conservative' },
            { label: 'Switch to ARM-based Graviton instances', value: 'visionary' },
            { label: 'Use serverless', value: 'ambitious' },
        ],
    },
    {
        text: 'How do you know which resources can be safely shutdown to reduce carbon footprint?',
        options: [
            { label: 'Check the utilization metrics and access logs', value: 'pragmatic' },
            { label: 'Ask the application owners', value: 'conservative' },
            { label: 'Shutdown first, if nobody complains then it\'s cool!', value: 'visionary' },
            { label: 'I know my IT estate like the back of my hand', value: 'ambitious' },
        ],
    },
    {
        text: 'How will you choose a location that is mostly powered by renewable energy?',
        options: [
            { label: 'Refer to the Amazon Sustainability website', value: 'pragmatic' },
            { label: 'Invest in renewable energy projects to offset carbon footprint', value: 'conservative' },
            { label: 'Ask an AWS Solutions Architect', value: 'visionary' },
            { label: 'Install my own Solar Panels', value: 'ambitious' },
        ],
    },
    {
        text: 'What can you use ARM-based Graviton instances for?',
        options: [
            { label: 'All of my Linux-based applications', value: 'ambitious' },
            { label: 'Only the managed services like RDS and MSK', value: 'conservative' },
            { label: 'For applications written in interpreted languages like Python', value: 'pragmatic' },
            { label: 'I can port all my .NET Core applications to .NET Core containers on Linux', value: 'visionary' },
        ],
    },
    {
        text: 'Which of the following serverless services will you use first?',
        options: [
            { label: 'Amazon DynamoDB', value: 'visionary' },
            { label: 'AWS Lambda', value: 'ambitious' },
            { label: 'Amazon Aurora Serverless', value: 'pragmatic' },
            { label: 'Amazon S3', value: 'conservative' },
        ],
    },
    // Add more questions here
];

export default questions;