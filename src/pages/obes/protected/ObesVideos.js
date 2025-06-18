import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice'
import Videos from '../../../ProjectFeatures/vidios/Videos'

function ObesVideos(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Videos"}))
      }, [dispatch])

    return(
        <Videos />
    )
}

export default ObesVideos;