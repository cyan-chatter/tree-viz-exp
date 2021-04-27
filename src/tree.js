const d3 = require('d3')

const tree = (height, width, data, svg) => {
        
    const h = height 
    const w = width 

    // var svg = d3.select(mainNode).append("svg")
    // .attr('width', width)
    // .attr('height', height)
    
    const treeLayout = d3.tree().size([h,w])

    //use stratify first if data not already in heirarchical format
    const root = d3.hierarchy(data)

    const links = treeLayout(root).links()

    const linkPathGen = d3.linkHorizontal().x(d=> d.y).y(d=>d.x)

    svg.selectAll('path').data(links)
    .enter().append('path').attr('d', linkPathGen)
        
}

export default tree

