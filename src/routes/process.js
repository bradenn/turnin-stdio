import {Router} from 'express';

let router = Router();

const manifest = {
    "compilationSpecifications": {
        "compileCommand": "make",
        "compileFiles": [
            {
                "fileName": "test1.in",
                "fileReference": "5,01d4ef4971"
            }
        ]
    },
    "projectFiles": {

    },
    "standardIOTests": [
        {
            "_id": "",
            "testName": "test1",
            "testExitCode": 0,
            "testIsHidden": false,
            "testArguments": [""],
            "testInput": {
                "fileName": "test1.in",
                "fileReference": "5,01d4ef4971"
            },
            "testOutput": {
                "fileName": "test1.out",
                "fileReference": "5,01d4ef4971"
            },
            "testErrors": {
                "fileName": "test1.err",
                "fileReference": "5,01d4ef4971"
            }
        }
    ]
};

router.get('/', (req, res) => {
    return res.send("task")
});

export default router;
