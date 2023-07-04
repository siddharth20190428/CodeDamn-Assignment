const Confirm = ({ disable }: { disable: boolean }) => {
    return (
        <div className="form-btn-cont">
            <button type="button" className="cancel-btn">
                Cancel
            </button>
            <button type="submit" className="confirm-btn" disabled={disable}>
                Save Changes
            </button>
        </div>
    );
};

export default Confirm;
