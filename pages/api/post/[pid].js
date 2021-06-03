export default function handler(req, res) {
    const { pid } = req.query
    debugger
    res.status(200).json({ name: 'John yy Doe' })
  }