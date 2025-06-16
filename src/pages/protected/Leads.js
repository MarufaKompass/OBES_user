import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../ProjectFeatures/common/headerSlice'
import Leads from '../../ProjectFeatures/leads'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Leads"}))
      }, [])


    return(
        <Leads />
    )
}

export default InternalPage