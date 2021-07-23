import React from 'react';
import '../../css/administrators/search_blog_list.css';

const SearchBlogListUI = (props) => {
    return (
        <div className="search_blog">
            <h2>搜索文章</h2>
            <div className="main_content">
                {
                    props.blogs.map((item, key) => {
                        return (
                            <div key={key} className='each_blog'>
                                <h3 onClick={props.eachBlog.bind(this, key)}>{item.blogName}</h3>
                                <div className='information'>
                                    <p className='light'>
                                        {item.blogAuthor}&nbsp;&nbsp;&nbsp;{item.blogDate}
                                    </p>
                                    <p className='key'>{item.blogClass}</p>
                                </div>
                                <div>{JSON.stringify(item.blogContent)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBlogListUI;