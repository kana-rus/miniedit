import { FileEntry } from "@tauri-apps/api/fs";


// export const FileTree = (props: {
//     entries: FileEntry[],
// }) => {
//     const fildTree = props.entries.map(entry => {
//         entry.children
//         ? 
//         : return 
//     });
//     return (
//         <div>
// 
//         </div>
//     );
// };
// 
// const uniteFileTree = (
//     newRootEntry: FileEntry,
//     tree: JSX.Element[],
// ) => {
//     if (!newRootEntry.children) {
//         tree.push(<FileColumn name={newRootEntry.name ? newRootEntry.name : "(unnamed)"}/>);
//     }
//     newRootEntry.children!.map(entry => {
// 
//     })
// };

export
const DirBox = (props: {
    name: string,
    isOpen: boolean,
    childItems: JSX.Element[],
}) => {
    return (
        <div style={{
            width: "200px",
        }}>
            <h5 style={{
                margin: "0",
                width: "90px",
            }}>{`@ ${props.name}`}</h5>
            <div style={{
                border: "1px solid",
                padding: "12px",
            }}>
                {props.childItems}
            </div>
        </div>
        
    );
};

export
const FileColumn = (props: {
    name: string,
}) => {
    return (
        <div style={{
            height:  "1.5em",
        }}>{`$ ${props.name}`}</div>
    );
};