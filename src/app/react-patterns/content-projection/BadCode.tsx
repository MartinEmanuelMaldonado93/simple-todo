// ❌ The component is coupled with the application domain model.
import type { Comment } from "./types";

// ❌ The callbacks have weird and intuitive names.
export interface CommentsProps {
	comments: Comment[];
	nextClicked: () => void;
	previous: () => void;
	itemClick: (comment: Comment) => void;
}

export const Comments = ({
	comments,
	nextClicked,
	previous,
	itemClick,
}: CommentsProps) => {
	return (
		// ❌ There is no option to apply custom class.
		<div className='comments'>
			{/* ❌ Header cannot be replaced with something else. */}
			<h3>Comments list</h3>
			<ul className='list'>
				{comments.map((comment) => (
					// ❌ Only one list item type is supported.
					<li key={comment.id} className='list-item' onClick={itemClick}>
						{comment.content}
					</li>
				))}
			</ul>
			{/* ❌ Only buttons can be used, any other case is impossible. */}
			<button onClick={previous}>See previous comments</button>
			<button onClick={nextClicked}>Load next comments</button>
		</div>
	);
};

//USAGE
// @@@ The usage @@@
 
// It's a little bit ugly...
<Comments
  comments={[]}
  nextClicked={() => {}}
  previous={() => {}}
  itemClick={() => {}}
/>
 
// If we want to change the comments UI, we need
// to add wrappers or style directly in CSS...
{/* <div className="some-wrapper-to-style">
  <Comments
    comments={[]}
    nextClicked={() => {}}
    previous={() => {}}
    itemClick={() => {}}
  />
</div> */}