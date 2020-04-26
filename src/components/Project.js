import React, { useState, useMemo, createRef } from 'react'
import { Link } from "react-router-dom"
import './Project.sass'

function FeatureItem({ contentListItem, dataListItem, toSrc, toProject }) {
  const { listTitle } = contentListItem || {}
  const { srcA, projectLink, projectA, listItem } = dataListItem || {}
  return (
    <div className=".FeatureItem">
      {listTitle && <p>{listTitle}</p>}
      {srcA && <><a href={srcA}>{toSrc}</a><br /></>}
      {projectLink && <><Link to={projectLink}>{toProject}</Link><br /></>}
      {projectA && <><a href={projectA}>{toProject}</a><br /></>}
      <ul>
        {listItem.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
function Feature({ contentList, dataList, toSrc, toProject }) {
  const length = Math.max(dataList.length, contentList.length)
  const array = Array.from({ length: length })
  return (
    <div className="feature">
      {array.map((item, key) => {
        return (
          <FeatureItem
            contentListItem={contentList[key]}
            dataListItem={dataList[key]}
            toSrc={toSrc}
            toProject={toProject}
            key={JSON.stringify(dataList[key])}
          />
        )
      })}
    </div>
  )
}
function Content({ title, summary }) {
  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  )
}
function Preview({ preview }) {
  const { path } = preview
  const [imgStyle, setImgStyle] = useState({})
  const divRef = useMemo(() => {
    console.log("useMemo create divRef")
    return createRef()
  }, [])
  function moveToMiddle({ target: img }) {
    // console.log(key)
    let img_width = img.offsetWidth
    let div_width = divRef.current.offsetWidth
    // console.log(div_width)
    console.log('img_width', img.offsetWidth)
    console.log('div_width', divRef.current ? divRef.current.offsetWidth : 0)
    if (img_width > div_width) {
      let imgOffset = (img_width - div_width) / 2
      setImgStyle({ "right": `-${imgOffset}px` })
    }
  }
  return (
    <div className="preview" ref={divRef}>
      <img src={path} alt="" style={imgStyle} onLoad={(t) => { moveToMiddle(t) }} />
    </div>
  )
}
function ProjectItem({ subContainerStyle, title, summary, contentList, dataList, toSrc, toProject, preview }) {
  return (
    <div className="ProjectItem" >
      <div className="sub_container" style={subContainerStyle}>
        <Content title={title} summary={summary} />
        <Feature
          contentList={contentList}
          dataList={dataList}
          toSrc={toSrc}
          toProject={toProject}
        />
      </div>
      <Preview preview={preview} />
    </div>
  )
}
function ProjectItemArray({ projectArray, toProject, toSrc, dataArray }) {
  return projectArray.map((item, key) => {
    const { title, summary, list: contentList } = item
    const { preview, list: dataList, subContainerStyle } = dataArray[key]
    return (
      <ProjectItem
        key={JSON.stringify(dataList)}
        subContainerStyle={subContainerStyle}
        title={title}
        summary={summary}
        contentList={contentList}
        dataList={dataList}
        toSrc={toSrc}
        toProject={toProject}
        preview={preview}
      />
    )
  })
}
function Project({ content, dataArray }) {

  const { projectArray, title: sectionTitle, toProject, toSrc } = content

  return (
    <section id="projects">
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <ProjectItemArray
        projectArray={projectArray}
        toProject={toProject}
        toSrc={toSrc}
        dataArray={dataArray}
      />
    </section>
  )
}

export default Project