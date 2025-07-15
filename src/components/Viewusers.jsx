import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewusers = () => {
    const [user, changeUser] = useState([])
    const fetchdata = () => {
        axios.get("https://api.github.com/users").then(
            (req) => {
                changeUser(req)
            }
        ).catch()
    }
    useEffect(() => { fetchdata() }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Node Id</th>
                                    <th scope="col">Avatar UR</th>
                                    <th scope="col">Gravatar UR</th>
                                    <th scope="col">URL</th>
                                    <th scope="col">Html URL</th>
                                    <th scope="col">Followers URL</th>
                                    <th scope="col">Following URL</th>
                                    <th scope="col">Gists UR</th>
                                    <th scope="col">Starred URL</th>
                                    <th scope="col">Subscriptions URL</th>
                                    <th scope="col">Organizations URL</th>
                                    <th scope="col">Repos URL</th>
                                    <th scope="col">Events URL</th>
                                    <th scope="col">Received Events URL</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">User View Type</th>
                                </tr>
                            </thead>
                            {
                                user.map(
                                    (value, index) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.node_id}</td>
                                                    <td>{value.avatar_url}</td>
                                                    <td>{value.gravatar_id}</td>
                                                    <td>{value.urlt}</td>
                                                    <td>{value.html_url}</td>
                                                    <td>{value.followers_url}</td>
                                                    <td>{value.following_url}</td>
                                                    <td>{value.gists_url}</td>
                                                    <td>{value.starred_url}</td>
                                                    <td>{value.subscriptions_url}</td>
                                                    <td>{value.organizations_url}</td>
                                                    <td>{value.repos_url}</td>
                                                    <td>{value.events_url}</td>
                                                    <td>{value.received_events_url}</td>
                                                    <td>{value.type}</td>
                                                    <td>{value.user_view_type}</td>
                                                </tr>

                                            </tbody>
                                        )
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewusers