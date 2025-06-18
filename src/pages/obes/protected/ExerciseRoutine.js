import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice';
import Exercise from '../../../ProjectFeatures/exercise';


function ExerciseRoutine() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Exercise Routine" }))
    }, [dispatch])

    return (
        <Exercise />
    )
}

export default ExerciseRoutine;