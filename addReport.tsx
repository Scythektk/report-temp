import {useNavigate} from 'react-router-dom'
import { useState } from 'react';


const AddReport: React.FC () => {
    const navigate = useNavigate()

	const [reportName, setReportName] = useState('');
	const [applicationUrl, setApplicationUrl] = useState('');
	const [pageNames, setPageNames] = useState([]);
	const [gridLink, setGridLink] = useState('');

	const addPageNamesField = () => {
		const pageNamesContainer = document.getElementById('pageNamesContainer')
		const textInputDiv = document.createElement('div')
		textInputDiv.className = 'textInput form-group secondaryPageName'

		const newPageNameField = document.createElement('input')
		newPageNameField.type = 'text'
		newPageNameField.className = 'form-control form-control-lg'
		newPageNameField.required = true

		textInputDiv.appendChild(newPageNameField)
		pageNamesContainer?.appendChild(textInputDiv)
	}

	const removePageNamesField = () => {
		const textInputDivs = document.getElementsByClassName('secondaryPageName')
		textInputDivs[textInputDivs.length - 1].remove()
	}

	const handleSubmit = () => {

	}

    return (
        <div className="homepageWrapper">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="reportName">Report Name:</label>
                <input type="text" className="form-control" id="reportName" required value={reportName} onChange={(e) => setReportName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="applicationUrl">Application URL:</label>
                <input type="url" className="form-control" id="applicationUrl" required value={applicationUrl} onChange={(e) => setApplicationUrl(e.target.value)} />
            </div>
            <div id="pageNamesContainer">
                <label>Page Names:</label>
                <button type="button" onClick={addPageNamesField}>Add Page Name</button>
                {pageNames.map((name, index) => (
                    <div key={index} className="form-group">
                        <input type="text" className="form-control" value={name} onChange={(e) => handlePageNameChange(index, e.target.value)} />
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="gridLink">Grid Link:</label>
                <input type="url" className="form-control" id="gridLink" required value={gridLink} onChange={(e) => setGridLink(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}