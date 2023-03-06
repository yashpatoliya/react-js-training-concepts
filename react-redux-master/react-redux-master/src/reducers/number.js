const number = (status = 0,action) => {

    switch(action.type)
    {
        case "INCREMENT":
            return status + 1;
        break;

        case "DECREMENT":
            return status - 1;
        break;

        default : {
            return 0;
        }

    }

}

export default number;