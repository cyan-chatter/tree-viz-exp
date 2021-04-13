import { hierarchy } from 'd3';

const d3 = require('d3')

const tree = (height, width, margin, data) => {
    
    var mainNode = document.createElement('div');

    const h = height - margin.top - margin.bottom
    const w = width - margin.left - margin.right

    var svg = d3.select(mainNode).append("svg")
    .attr('width', width)
    .attr('height', height)
    
    const treeLayout = d3.tree().size([h,w])

    //use stratify first if data not already in heirarchical format
    const root = hierarchy(data)

    const links = treeLayout(root).links()

    const linkPathGen = d3.linkHorizontal().x(d=> d.y).y(d=>d.x)

    svg.selectAll('path').data(links)
    .enter().append('path').attr('d', linkPathGen)
        
    return mainNode
}

export default tree

