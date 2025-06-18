import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Charts from '../../../ProjectFeatures/charts'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Analytics"}))
      }, [])


    return(
        <Charts />
    )
}

export default InternalPage