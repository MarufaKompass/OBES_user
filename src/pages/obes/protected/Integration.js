import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice'
import Integration from '../../../ProjectFeatures/integration'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Integrations"}))
      }, [])
      
    return(
        <Integration />
    )
}

export default InternalPage