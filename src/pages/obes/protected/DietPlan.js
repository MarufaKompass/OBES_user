import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice';
import Diet from '../../../ProjectFeatures/diet';


function DietPlan() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Diet" }))
    }, [dispatch])

    return (
        <Diet />
    )
}

export default DietPlan;