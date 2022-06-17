
//recursive method
var invertTree = function(root) {
    //L R then process

    const reverseNodes = (node) => {
        if(node === null) {
            return; //return to the caller
        }

        //call this function recursivly on the left side
        reverseNodes(node.left)

        //call the right side until node is null
        reverseNodes(node.right)

        //hold left node, and swap
        let hold = node.left;
        node.left = node.right;
        node.right = hold;
    }

    reverseNodes(root);
    return root;
}


//iterative method
var invertTree = function(root) {
    //L R then process

    let st = [root]//put the tree inside

    //if something in the stack to process
    while(st.length > 0) {
        let node = st.pop() //access each node at the time/ pop gets the last element

        //validate if that node is null or not
        if(node != null) {
            //hold left node, and swap
            let hold = node.left;
            node.left = node.right;
            node.right = hold;

            //add to the stack
            st.push(node.left);
            st.push(node.right)
        }
    }



    return root;
}