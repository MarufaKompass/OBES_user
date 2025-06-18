import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice';
import Diet from '../../../ProjectFeatures/diet';


function DailyTrack() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Daily Track" }))
    }, [dispatch])

    return (
        <Diet />
    )
}

export default DailyTrack;