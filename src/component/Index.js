import React, {useState, useEffect} from 'react'

const url = "https://course-api.com/react-tabs-project";

const Index = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    const fetchJobs = async() => {
        const response = await fetch(url)
        const newJobs = await response.json()
        
        setJobs(newJobs)
        setLoading(false)
    }
    return (
        <div>
            
        </div>
    )
}

export default Index
