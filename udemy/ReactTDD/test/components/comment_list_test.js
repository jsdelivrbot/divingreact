import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
    let component;

    beforeEach(() => {
        const commentsProps = {'comments': ["New comment", "Other new comment"]};
        component = renderComponent(CommentList, null, commentsProps);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain("New comment");
        expect(component).to.contain("Other new comment");
    });
});